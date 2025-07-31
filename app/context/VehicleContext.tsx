"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const VehicleContext = createContext({
    vehicles: [],
    loading: true,
    error: null as unknown
});

import { PropsWithChildren } from 'react';

export const VehicleProvider = ({ children }: PropsWithChildren<object>) => {
    const [vehicles, setVehicles] = useState([]);
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