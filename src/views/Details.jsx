import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Details() {
  const { id } = useParams();

  return (
    <div>
      <h3>{id}</h3>
    </div>
  );
}
