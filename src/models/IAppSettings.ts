type Subscription = {
  id: string;
  name: string;
  benefits: string;
  price: string;
  period: string;
};

export interface IAppSettings {
  benefits: string[];
  subscriptions: Subscription[];
}
