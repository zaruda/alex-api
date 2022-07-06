type Subscription = {
  id: string;
  name: string;
  benefits: string;
  price: string;
  period: string;
};

export interface IAppSettings {
  id: string;
  benefits: string[];
  subscriptions: Subscription[];
}
