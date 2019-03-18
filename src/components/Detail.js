import React from 'react';

const Detail = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

export default Detail;
