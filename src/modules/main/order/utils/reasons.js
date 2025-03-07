export const cancelReasons = [
  {
    id: '001',
    reason:
      'Price of one or more items have changed due to which buyer was asked to make additional payment ',
  },
  {
    id: '002',
    reason: 'One or more items in the Order not available',
  },
  {
    id: '003',
    reason: 'Product available at lower than order price',
  },
  {
    id: '004',
    reason: 'Order in pending shipment / delivery state for too long',
  },
  {
    id: '006',
    reason: 'Order not shipped as per buyer app SLA',
  },
  {
    id: '009',
    reason: 'Wrong product delivered',
  },
  {
    id: '010',
    reason: 'Buyer wants to modify details',
  },
];

export const returnReasons = [
  {
    id: '001',
    reason: 'Buyer does not want product any more',
  },
  {
    id: '002',
    reason: 'Product available at lower than order price',
  },
  {
    id: '003',
    reason: 'Product damaged or not in usable state',
  },
  {
    id: '004',
    reason: 'Product is of incorrect quantity or size',
  },
  {
    id: '005',
    reason: 'Product delivered is different from what was shown and ordered',
  },
];
