import { useEffect, useState } from "react";
import { Table, Container } from "react-bootstrap";

const DataCurrency = () => {
    let [data, setData] = useState({});

    useEffect(() => {
        fetch(
            "https://api.currencyfreaks.com/latest?apikey=fad413abd8bb45e480c43117edb41682"
        ).then((res) => {
            res.json().then((data) => {
                let { CAD, EUR, IDR, JPY, CHF, GBP } = data.rates;
                setData({ CAD, EUR, IDR, JPY, CHF, GBP });
            });
        });
    }, []);

    return (
        <div className="content">
            <Container>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th className="text-center">Currency</th>
                            <th className="text-center">We Buy</th>
                            <th className="text-center">Exchange Rate</th>
                            <th className="text-center">We Sell</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(data).map((key, index) => {
                            return (
                                <tr key={index}>
                                    <td className="text-center">{key}</td>
                                    <td>{(data[key] * 105) / 100}</td>
                                    <td>{data[key]}</td>
                                    <td>{(data[key] * 95) / 100}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default DataCurrency;
