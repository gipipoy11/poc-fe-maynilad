import React from 'react';
import { vehicles } from '../data/r_vehicles';
import Link from 'next/link';

const SideNav: React.FC = () => {
    const url = process.env.NEXT_PUBLIC_API_URL;
    console.log(url);
    return(

        <ul className='space-y-1 pt-4 pb-4'>
            {vehicles.map(vehicle => (
                <li key={vehicle.id} className="mb-2">
                    <Link href={`/vehicles/${vehicle.id}`}
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200">
                        {vehicle.Title}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default SideNav;