import React from 'react';
import { Link } from 'react-router-dom';

const AdminMenu = props => {
    return (
        <Link to={`/admin/portfolio`}>Portifólio</Link>
    )
}

export default AdminMenu;