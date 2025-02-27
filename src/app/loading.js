'use client'
import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';

function Loading() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div>
            {isLoading ? (
                <div className="card-container">
                    <Skeleton height={50} width={300} />
                    <Skeleton height={40} width={200} />
                    <Skeleton height={40} width={150} />
                </div>
            ) : (
                {/* Render actual content here */}
            )}
        </div>
    );
}

export default Loading;