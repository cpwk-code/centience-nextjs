export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      cms_blog_posts: {
        Row: {
          author: string
          category: string
          content: string
          created_at: string
          excerpt: string
          featured_image_url: string | null
          id: string
          keywords: string | null
          meta_description: string | null
          meta_title: string | null
          published_at: string | null
          slug: string
          status: string
          title: string
          updated_at: string
        }
        Insert: {
          author?: string
          category?: string
          content: string
          created_at?: string
          excerpt: string
          featured_image_url?: string | null
          id?: string
          keywords?: string | null
          meta_description?: string | null
          meta_title?: string | null
          published_at?: string | null
          slug: string
          status?: string
          title: string
          updated_at?: string
        }
        Update: {
          author?: string
          category?: string
          content?: string
          created_at?: string
          excerpt?: string
          featured_image_url?: string | null
          id?: string
          keywords?: string | null
          meta_description?: string | null
          meta_title?: string | null
          published_at?: string | null
          slug?: string
          status?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      cms_industries: {
        Row: {
          created_at: string
          full_description: string | null
          icon: string | null
          id: string
          is_active: boolean
          key_regulations: Json | null
          keywords: string | null
          meta_description: string | null
          meta_title: string | null
          name: string
          order_index: number
          short_description: string
          slug: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          full_description?: string | null
          icon?: string | null
          id?: string
          is_active?: boolean
          key_regulations?: Json | null
          keywords?: string | null
          meta_description?: string | null
          meta_title?: string | null
          name: string
          order_index?: number
          short_description: string
          slug: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          full_description?: string | null
          icon?: string | null
          id?: string
          is_active?: boolean
          key_regulations?: Json | null
          keywords?: string | null
          meta_description?: string | null
          meta_title?: string | null
          name?: string
          order_index?: number
          short_description?: string
          slug?: string
          updated_at?: string
        }
        Relationships: []
      }
      cms_page_content: {
        Row: {
          content: Json
          created_at: string
          id: string
          page_key: string
          section_key: string
          updated_at: string
        }
        Insert: {
          content?: Json
          created_at?: string
          id?: string
          page_key: string
          section_key: string
          updated_at?: string
        }
        Update: {
          content?: Json
          created_at?: string
          id?: string
          page_key?: string
          section_key?: string
          updated_at?: string
        }
        Relationships: []
      }
      cms_page_seo: {
        Row: {
          canonical_url: string | null
          created_at: string
          id: string
          keywords: string | null
          meta_description: string | null
          meta_title: string | null
          no_index: boolean | null
          og_description: string | null
          og_image_url: string | null
          og_title: string | null
          page_key: string
          updated_at: string
        }
        Insert: {
          canonical_url?: string | null
          created_at?: string
          id?: string
          keywords?: string | null
          meta_description?: string | null
          meta_title?: string | null
          no_index?: boolean | null
          og_description?: string | null
          og_image_url?: string | null
          og_title?: string | null
          page_key: string
          updated_at?: string
        }
        Update: {
          canonical_url?: string | null
          created_at?: string
          id?: string
          keywords?: string | null
          meta_description?: string | null
          meta_title?: string | null
          no_index?: boolean | null
          og_description?: string | null
          og_image_url?: string | null
          og_title?: string | null
          page_key?: string
          updated_at?: string
        }
        Relationships: []
      }
      cms_services: {
        Row: {
          created_at: string
          features: Json | null
          full_description: string | null
          icon: string | null
          id: string
          is_active: boolean
          keywords: string | null
          meta_description: string | null
          meta_title: string | null
          name: string
          order_index: number
          short_description: string
          slug: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          features?: Json | null
          full_description?: string | null
          icon?: string | null
          id?: string
          is_active?: boolean
          keywords?: string | null
          meta_description?: string | null
          meta_title?: string | null
          name: string
          order_index?: number
          short_description: string
          slug: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          features?: Json | null
          full_description?: string | null
          icon?: string | null
          id?: string
          is_active?: boolean
          keywords?: string | null
          meta_description?: string | null
          meta_title?: string | null
          name?: string
          order_index?: number
          short_description?: string
          slug?: string
          updated_at?: string
        }
        Relationships: []
      }
      contact_submissions: {
        Row: {
          company: string | null
          created_at: string
          email: string
          full_name: string
          id: string
          message: string | null
          phone: string
          reason: string | null
          referring_page: string | null
        }
        Insert: {
          company?: string | null
          created_at?: string
          email: string
          full_name: string
          id?: string
          message?: string | null
          phone: string
          reason?: string | null
          referring_page?: string | null
        }
        Update: {
          company?: string | null
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          message?: string | null
          phone?: string
          reason?: string | null
          referring_page?: string | null
        }
        Relationships: []
      }
      referral_submissions: {
        Row: {
          consent_marketing: boolean | null
          created_at: string
          id: string
          message: string | null
          referral_company: string | null
          referral_email: string
          referral_first_name: string
          referral_last_name: string
          referral_phone: string
          referring_page: string | null
          your_company: string
          your_email: string
          your_first_name: string
          your_last_name: string | null
          your_phone: string
        }
        Insert: {
          consent_marketing?: boolean | null
          created_at?: string
          id?: string
          message?: string | null
          referral_company?: string | null
          referral_email: string
          referral_first_name: string
          referral_last_name: string
          referral_phone: string
          referring_page?: string | null
          your_company: string
          your_email: string
          your_first_name: string
          your_last_name?: string | null
          your_phone: string
        }
        Update: {
          consent_marketing?: boolean | null
          created_at?: string
          id?: string
          message?: string | null
          referral_company?: string | null
          referral_email?: string
          referral_first_name?: string
          referral_last_name?: string
          referral_phone?: string
          referring_page?: string | null
          your_company?: string
          your_email?: string
          your_first_name?: string
          your_last_name?: string | null
          your_phone?: string
        }
        Relationships: []
      }
      risk_assessments: {
        Row: {
          answers: Json
          company: string
          created_at: string
          email: string
          id: string
          max_score: number
          name: string
          phone: string
          referring_page: string | null
          risk_level: string
          section_scores: Json
          title: string
          total_score: number
        }
        Insert: {
          answers: Json
          company: string
          created_at?: string
          email: string
          id?: string
          max_score?: number
          name: string
          phone: string
          referring_page?: string | null
          risk_level: string
          section_scores: Json
          title: string
          total_score: number
        }
        Update: {
          answers?: Json
          company?: string
          created_at?: string
          email?: string
          id?: string
          max_score?: number
          name?: string
          phone?: string
          referring_page?: string | null
          risk_level?: string
          section_scores?: Json
          title?: string
          total_score?: number
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user"],
    },
  },
} as const
