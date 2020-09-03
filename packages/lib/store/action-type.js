const ActionType = {
  Countries: {
    Add: 'Countries.Add',
    Pick: 'Countries.Pick',
  },
  Basket: {
    Visible: 'Basket.Visible',
    AddItem: 'Basket.AddItem',
    RemoveItem: 'Basket.RemoveItem',
    Clear: 'Basket.Clear',
    UpdateCount: 'Basket.UpdateCount',
    UpdateCartridge: 'Basket.UpdateCartridge',
    UpdatePromo: 'Basket.UpdatePromo',
    UpdatePriceItems: 'Basket.UpdatePriceItems',
    UpdateType: 'Basket.UpdateType',
  },
  Items: {
    Add: 'Items.Add',
    Clear: 'Items.Clear',
  },
  States: {
    Add: 'States.Add',
  },
  Cities: {
    Add: 'Cities.Add',
  },
  Checkout: {
    MutateShippingCity: 'Checkout.MutateShippingCity',
    GetShippingMethods: 'Checkout.GetShippingMethods',
    GetPaymentMethods: 'Checkout.GetPaymentMethods',
    SetError: 'Checkout.SetError',
  },
  Payment: {
    SetData: 'Payment.SetData',
    SetId: 'Payment.SetId',
  },
  Locale: {
    Set: 'Locale.Set',
  },
  Preferences: {
    PreferDeviceInsteadOfPackage: 'Preferences.PreferDeviceInsteadOfPackage',
    PreferPackageInsteadOfDevice: 'Preferences.PreferPackageInsteadOfDevice',
  },
};

export default Object.freeze(ActionType);
