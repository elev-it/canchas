export interface ICancha {
    uid: string;
    name: string;
    description: string;
    price: number;
    image: string;
    status: 'available' | 'occupied' | 'maintenance';
    type: 'tennis' | 'soccer' | 'volleyball';
    location: string;
    capacity: number;

}