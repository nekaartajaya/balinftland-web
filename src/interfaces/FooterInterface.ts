export interface FooterMenu {
  title: string;
  list: Array<ListFooterMenu>;
}

export interface ListFooterMenu {
  name: string;
  link: string;
}

export interface SocialMedia extends ListFooterMenu {
  icon: string;
}
