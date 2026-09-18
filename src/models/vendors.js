const vendorSchema = new mongoose.Schema(
{
businessName: {
type: String,
required: [true, 'Business name is required'],
trim: true,
},
ownerName: {
type: String,
required: [true, 'Owner name is required'],
trim: true,
},
email: {
type: String,
required: [true, 'Email is required'],
unique: true,
lowercase: true,
trim: true,
},
phone: {
type: String,
required: [true, 'Phone number is required'],
},
category: {
type: String,
required: true,
enum: ['Venues', 'Catering', 'DJ & Music', 'Decor & Supplies', 'Rentals', 'Entertainment', 'Other'],
},
description: {
type: String,
default: '',
},
location: {
address: { type: String, default: '' },
city: { type: String, default: '' },
state: { type: String, default: '' },
zip: { type: String, default: '' },
},
isVerified: {
type: Boolean,
default: false,
},
},
{ timestamps: true }
);

export default mongoose.model('Vendor', vendorSchema);
