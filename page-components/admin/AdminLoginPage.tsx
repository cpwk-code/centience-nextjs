"use client";
'use client';
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";
import { Shield, LogIn, Loader2, KeyRound, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

type Step = 'credentials' | 'mfa';

const AdminLoginPage = () => {
  const router = useRouter();
  const [step, setStep] = useState<Step>('credentials');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mfaCode, setMfaCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [totpSecret, setTotpSecret] = useState<string | null>(null);
  const [showSetup, setShowSetup] = useState(false);

  // Step 1: Submit email + password
  const handleCredentials = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.error || 'Login failed');
        return;
      }
      setStep('mfa');
    } catch {
      toast.error('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Load QR code for first-time MFA setup
  const handleShowSetup = async () => {
    try {
      const res = await fetch('/api/admin/mfa-setup');
      const data = await res.json();
      if (res.ok) {
        setQrCode(data.qrCode);
        setTotpSecret(data.secret);
        setShowSetup(true);
      } else {
        toast.error('Could not load MFA setup.');
      }
    } catch {
      toast.error('Could not load MFA setup.');
    }
  };

  // Step 2: Submit MFA code
  const handleMfa = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/admin/mfa-verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: mfaCode }),
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.error || 'Invalid code');
        setMfaCode('');
        return;
      }
      toast.success('Signed in successfully');
      router.push('/admin/dashboard');
      router.refresh();
    } catch {
      toast.error('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-gold" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">Admin Portal</h1>
            <p className="text-muted-foreground mt-2">
              {step === 'credentials' ? 'Sign in to access the dashboard' : 'Two-factor authentication'}
            </p>
          </div>

          {/* Step 1: Email + Password */}
          {step === 'credentials' && (
            <form onSubmit={handleCredentials} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                />
              </div>
              <Button
                type="submit"
                variant="gold"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Signing in...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <LogIn className="w-4 h-4" />
                    Sign In
                  </span>
                )}
              </Button>
            </form>
          )}

          {/* Step 2: MFA */}
          {step === 'mfa' && (
            <div className="space-y-6">
              {!showSetup ? (
                <form onSubmit={handleMfa} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="mfa-code">Authenticator Code</Label>
                    <Input
                      id="mfa-code"
                      type="text"
                      inputMode="numeric"
                      placeholder="000000"
                      value={mfaCode}
                      onChange={(e) => setMfaCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                      maxLength={6}
                      required
                      autoComplete="one-time-code"
                      className="text-center text-2xl tracking-widest font-mono"
                    />
                    <p className="text-xs text-muted-foreground text-center">
                      Open your authenticator app and enter the 6-digit code for <strong>Compuwork Admin</strong>.
                    </p>
                  </div>
                  <Button
                    type="submit"
                    variant="gold"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting || mfaCode.length !== 6}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Verifying...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <KeyRound className="w-4 h-4" />
                        Verify Code
                      </span>
                    )}
                  </Button>
                  <div className="text-center">
                    <button
                      type="button"
                      onClick={handleShowSetup}
                      className="text-xs text-muted-foreground hover:text-gold transition-colors underline underline-offset-2"
                    >
                      First time? Set up your authenticator app
                    </button>
                  </div>
                </form>
              ) : (
                /* MFA Setup — show QR code */
                <div className="space-y-5">
                  <div className="text-center space-y-1">
                    <QrCode className="w-6 h-6 mx-auto text-gold" />
                    <p className="text-sm font-medium">Scan with your authenticator app</p>
                    <p className="text-xs text-muted-foreground">Google Authenticator, Authy, or 1Password</p>
                  </div>
                  {qrCode && (
                    <div className="flex justify-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={qrCode} alt="MFA QR Code" className="w-48 h-48 rounded-lg border border-border" />
                    </div>
                  )}
                  {totpSecret && (
                    <div className="bg-muted rounded-lg p-3 text-center">
                      <p className="text-xs text-muted-foreground mb-1">Or enter this key manually:</p>
                      <code className="text-sm font-mono font-semibold tracking-wider break-all">{totpSecret}</code>
                    </div>
                  )}
                  <Button
                    type="button"
                    variant="gold"
                    size="lg"
                    className="w-full"
                    onClick={() => setShowSetup(false)}
                  >
                    I&apos;ve scanned it — Enter Code
                  </Button>
                </div>
              )}
            </div>
          )}

          <div className="mt-6 text-center">
            <a href="/" className="text-sm text-muted-foreground hover:text-gold transition-colors">
              ← Back to Website
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLoginPage;
