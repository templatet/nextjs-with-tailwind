import axios from 'axios';
import useSWR from 'swr';

type Methods = (
    'get' |
    'post' |
    'head' |
    'put' |
    'delete' |
    'options' |
    'patch'
);

export default function SWR(url: string, method: Methods = 'get') {
    return useSWR(url, href => (
        axios[method](href).then(res => res.data)
    ));
};