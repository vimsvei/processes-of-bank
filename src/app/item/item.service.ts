export interface Item {
  id: string;
  type: string;
  code: string;
  parent: {
    category: string;
    segment: string;
    group: string;
  };
  nested: {
    segments: string;
    groups: string;
    processes: string;
  };
  name: {
    ru: string;
    en: string;
  };
  description: {
    ru: string;
    en: string;
  };
}

export class ItemService {
  getItems(){}
  getItem(){}
}
