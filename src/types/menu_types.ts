

export interface SubMenuItem {
  id: number;
  title: string;
  link: string;
  img?: string;
}

export interface MenuItem {
  id: number;
  title: string;
  link: string;
  has_dropdown?: boolean;
  is_home_menu?: boolean;
  mega_menu?: boolean;
  demo?: string;
  sub_menus?: SubMenuItem[];
}