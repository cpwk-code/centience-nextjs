'use client';
import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { CMSBlogPost, CMSService, CMSIndustry, CMSPageContent, CMSPageSEO } from '@/types/cms';
import { toast } from 'sonner';

export function useCMSBlogPosts() {
  const [posts, setPosts] = useState<CMSBlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPosts = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('cms_blog_posts')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setPosts(data as CMSBlogPost[]);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      toast.error('Failed to load blog posts');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const createPost = async (post: Omit<CMSBlogPost, 'id' | 'created_at' | 'updated_at'>) => {
    const { data, error } = await supabase
      .from('cms_blog_posts')
      .insert(post)
      .select()
      .single();
    
    if (error) throw error;
    await fetchPosts();
    return data as CMSBlogPost;
  };

  const updatePost = async (id: string, updates: Partial<CMSBlogPost>) => {
    const { data, error } = await supabase
      .from('cms_blog_posts')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    await fetchPosts();
    return data as CMSBlogPost;
  };

  const deletePost = async (id: string) => {
    const { error } = await supabase
      .from('cms_blog_posts')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
    await fetchPosts();
  };

  return { posts, isLoading, fetchPosts, createPost, updatePost, deletePost };
}

export function useCMSServices() {
  const [services, setServices] = useState<CMSService[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchServices = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('cms_services')
        .select('*')
        .order('order_index', { ascending: true });
      
      if (error) throw error;
      setServices(data as CMSService[]);
    } catch (error) {
      console.error('Error fetching services:', error);
      toast.error('Failed to load services');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  const createService = async (service: Omit<CMSService, 'id' | 'created_at' | 'updated_at'>) => {
    const { data, error } = await supabase
      .from('cms_services')
      .insert(service)
      .select()
      .single();
    
    if (error) throw error;
    await fetchServices();
    return data as CMSService;
  };

  const updateService = async (id: string, updates: Partial<CMSService>) => {
    const { data, error } = await supabase
      .from('cms_services')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    await fetchServices();
    return data as CMSService;
  };

  const deleteService = async (id: string) => {
    const { error } = await supabase
      .from('cms_services')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
    await fetchServices();
  };

  return { services, isLoading, fetchServices, createService, updateService, deleteService };
}

export function useCMSIndustries() {
  const [industries, setIndustries] = useState<CMSIndustry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchIndustries = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('cms_industries')
        .select('*')
        .order('order_index', { ascending: true });
      
      if (error) throw error;
      setIndustries(data as CMSIndustry[]);
    } catch (error) {
      console.error('Error fetching industries:', error);
      toast.error('Failed to load industries');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchIndustries();
  }, [fetchIndustries]);

  const createIndustry = async (industry: Omit<CMSIndustry, 'id' | 'created_at' | 'updated_at'>) => {
    const { data, error } = await supabase
      .from('cms_industries')
      .insert(industry)
      .select()
      .single();
    
    if (error) throw error;
    await fetchIndustries();
    return data as CMSIndustry;
  };

  const updateIndustry = async (id: string, updates: Partial<CMSIndustry>) => {
    const { data, error } = await supabase
      .from('cms_industries')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    await fetchIndustries();
    return data as CMSIndustry;
  };

  const deleteIndustry = async (id: string) => {
    const { error } = await supabase
      .from('cms_industries')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
    await fetchIndustries();
  };

  return { industries, isLoading, fetchIndustries, createIndustry, updateIndustry, deleteIndustry };
}

export function useCMSPageContent(pageKey: string) {
  const [content, setContent] = useState<CMSPageContent[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchContent = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('cms_page_content')
        .select('*')
        .eq('page_key', pageKey);
      
      if (error) throw error;
      setContent(data as CMSPageContent[]);
    } catch (error) {
      console.error('Error fetching page content:', error);
      toast.error('Failed to load page content');
    } finally {
      setIsLoading(false);
    }
  }, [pageKey]);

  useEffect(() => {
    fetchContent();
  }, [fetchContent]);

  const upsertContent = async (sectionKey: string, contentData: Record<string, any>) => {
    const { data, error } = await supabase
      .from('cms_page_content')
      .upsert({
        page_key: pageKey,
        section_key: sectionKey,
        content: contentData,
      }, { onConflict: 'page_key,section_key' })
      .select()
      .single();
    
    if (error) throw error;
    await fetchContent();
    return data as CMSPageContent;
  };

  return { content, isLoading, fetchContent, upsertContent };
}

export function useCMSPageSEO(pageKey?: string) {
  const [seoList, setSeoList] = useState<CMSPageSEO[]>([]);
  const [seo, setSeo] = useState<CMSPageSEO | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAllSEO = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('cms_page_seo')
        .select('*')
        .order('page_key', { ascending: true });
      
      if (error) throw error;
      setSeoList(data as CMSPageSEO[]);
    } catch (error) {
      console.error('Error fetching SEO data:', error);
      toast.error('Failed to load SEO data');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetchSEO = useCallback(async () => {
    if (!pageKey) {
      setIsLoading(false);
      return;
    }
    try {
      const { data, error } = await supabase
        .from('cms_page_seo')
        .select('*')
        .eq('page_key', pageKey)
        .maybeSingle();
      
      if (error) throw error;
      setSeo(data as CMSPageSEO | null);
    } catch (error) {
      console.error('Error fetching SEO data:', error);
    } finally {
      setIsLoading(false);
    }
  }, [pageKey]);

  useEffect(() => {
    if (pageKey) {
      fetchSEO();
    } else {
      fetchAllSEO();
    }
  }, [pageKey, fetchSEO, fetchAllSEO]);

  const upsertSEO = async (data: Partial<CMSPageSEO> & { page_key: string }) => {
    const { data: result, error } = await supabase
      .from('cms_page_seo')
      .upsert(data, { onConflict: 'page_key' })
      .select()
      .single();
    
    if (error) throw error;
    if (pageKey) {
      await fetchSEO();
    } else {
      await fetchAllSEO();
    }
    return result as CMSPageSEO;
  };

  return { seo, seoList, isLoading, fetchSEO, fetchAllSEO, upsertSEO };
}
