import React, { useState, useEffect } from "react";
import BillAPI from "../utils/billAPI";
import { Link } from "react-router-dom";
import { Row, Col, Container, Card } from "react-bootstrap";
import DeleteBtn from "../components/DeleteBtn/index";

function BudgetBox() {
    const [bills, setBills] = useState([]);
    // Load all bills and store them with setBills
    useEffect(() => {
        loadBills();
    }, []);

    // Load all bills and sets them to bills
    function loadBills() {
        BillAPI.getBills()
            .then((res) => {
                console.log(res.data);
                setBills(res.data);})
            .catch((err) => console.log(err));
    }

    // Deletes a bill from the database with a given id,
    // then reloads bills from the db
    function deleteBill(id) {
        BillAPI.deleteBill(id)
            .then((res) => loadBills())
            .catch((err) => console.log(err));
    }

    //console.log(res.data);

    return (
        <div className="container" id="bill-box">
            <header>
                <h1>Bill Taskbar</h1>
            </header>
            <div className="row">
                <div className="col-4">
                    <div className="list-group">
                        <a href="#one" className="list-group-item list-group-item-action">Bill #1</a>
                        <a href="#two" className="list-group-item list-group-item-action">Bill #2</a>
                        <a href="#three" className="list-group-item list-group-item-action">Bill #3</a>
                        <a href="#four" className="list-group-item list-group-item-action">Bill #4</a>
                        <a href="#five" className="list-group-item list-group-item-action">Bill #5</a>
                        <a href="#six" className="list-group-item list-group-item-action">Bill #6</a>
                        <a href="#seven" className="list-group-item list-group-item-action">Bill #7</a>
                    </div>
                </div>
                <div className="col-8">
                    <div className="container2">
                    <label for="billName">Bill Name: </label><br></br>
                    <textarea id="billName" name="billName" rows="1" cols="50"></textarea>
                    <br></br>
                    <label for="billAmount">Bill Amount: </label><br></br>
                    <textarea id="billAmount" name="billAmount" rows="1" cols="50"></textarea>
                    <br></br>
                    <label for="billDate">Bill Due Date: </label><br></br>
                    <textarea id="billDate" name="billDate" rows="1" cols="50"></textarea>
                    <br></br>
                    <label for="billDescription">Bill Description: </label><br></br>
                    <textarea id="billDescription" name="billDescription" rows="2" cols="50"></textarea>
                    <br></br>
                    <input type="submit" value="Submit"></input>
                    </div>
                </div>
            </div>

                <Col>
                    <h1>Bills On My List</h1>
                    {bills.length ? (
                        <ul>
                            {bills.map((bill) => (
                                <div key={bill._id}>
                                    <Link to={"/bill/" + bill._id}>{bill.item}</Link>
                                    <DeleteBtn onClick={() => deleteBill(bill._id)} />
                                </div>
                            ))}
                        </ul>
                    ) : (
                            <h3>No Results to Display</h3>
                        )}
                </Col>
        </div>
    );
}

export default BudgetBox;