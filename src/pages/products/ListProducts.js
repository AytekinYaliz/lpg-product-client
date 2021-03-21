import { useState, useEffect } from 'react';
import { searchProducts } from './fetchProducts';
import { Table } from 'antd';

const columns = [
{
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
},
{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: true
},
{
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    sorter: true
},
{
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
    sorter: true
}
];

export const ListProducts = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [pagination, setPagination] = useState({
        showSizeChanger: true, 
        pageSizeOptions: [5,10,20],
        // total: 0,
        current: 1,
        pageSize: 10,
    });

    const getProducts = (params = {}) => {
        const { pagination, ...rest } = params;
        const { showSizeChanger, pageSizeOptions, ...restPg } = pagination;

        setLoading(true);
        searchProducts({ ...rest, ...restPg })
            .then(res => res.data)
            .then(res => {
                setProducts(res.data.records);
                setPagination({
                    total: res.data.totalRecords,
                    ...pagination
                });
                setLoading(false);
            });
    };
    useEffect(() => {
        console.log("component is mounted");
        getProducts({ pagination });
    }, []);

    const handleTableChange = (pagination, filters, sorter) => {
        getProducts({
        sortField: sorter.field,
        sortOrder: sorter.order,
        pagination,
        ...filters,
        });
    };

    return (
        <Table bordered 
            title={() => 'Products'}
            size="small"
            columns={columns}
            rowKey={product => product.id}
            loading={loading}
            dataSource={products} 
            pagination={pagination}
            onChange={handleTableChange}
        />
    );
}

