"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { vehiclesJson } from '../../data/r_vehicles';
import { PropsWithChildren } from 'react';
import { Vehicle } from '../interface/vehicle.interface';

interface VehicleContextType {
    vehicles: Vehicle[];
    loading: boolean;
    error: unknown;
}

const VehicleContext = createContext<VehicleContextType>({
    vehicles: [],
    loading: true,
    error: null
});

export const VehicleProvider = ({ children }: PropsWithChildren<object>) => {
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<unknown>(null);

    useEffect(() => {
        const fetchVehicles = async () => {
            const url = process.env.NEXT_PUBLIC_API_URL;
            if (!url) {
                setError(new Error('env var NEXT_PUBLIC_API_URL is not defined'));
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get(url);
                setVehicles(response.data.data);

                //setVehicles(vehiclesJson); //for testing purposes
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchVehicles();
    }, []);

    return (
        <VehicleContext.Provider value={{ vehicles, loading, error }}>
            {children}
        </VehicleContext.Provider>
    );
};

export const useVehicles = () => {
    return useContext(VehicleContext);
};