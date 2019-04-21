// ย้าย product form field แยกมาไว้ในนี้เพื่อคนอื่นอาจจะเรียกใช้ form field ตัวนี้ได้
export const productFormField = [
  { label: 'Product Name', name: 'productName', type: 'text', required: true},
  { label: 'Unit Price', name: 'unitPrice', type: 'number', required: true},
  { label: 'Thumbnail', name: 'thumbnail', type: 'text', required: true},
];