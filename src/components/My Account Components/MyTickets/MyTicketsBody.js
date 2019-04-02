import React,{Component} from 'react';

class MyTicketsBody extends Component{

    render(){

        return(

            <div className="col-lg-8">
                <div className="padding-top-2x mt-2 hidden-lg-up"></div>
                <div className="table-responsive">
                    <table className="table table-hover margin-bottom-none">
                        <thead>
                        <tr>
                            <th>Ticket Subject</th>
                            <th>Date Submitted</th>
                            <th>Type</th>
                            <th>Priority</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><a className="text-medium navi-link" href="account-single-ticket.html">Ticket #1</a></td>
                            <td>08/08/2018</td>
                            <td>Website Problem</td>
                            <td><span className="text-warning">High</span></td>
                            <td><span className="text-primary">Open</span></td>
                        </tr>
                        <tr>
                            <td><a className="text-medium navi-link" href="account-single-ticket.html">Ticket #2</a></td>
                            <td>07/07/2018</td>
                            <td>Shipping Problem</td>
                            <td><span className="text-info">Medium</span></td>
                            <td><span className="text-muted">Closed</span></td>
                        </tr>
                        <tr>
                            <td><a className="text-medium navi-link" href="account-single-ticket.html">Ticket #3</a></td>
                            <td>06/06/2018</td>
                            <td>Product Problem</td>
                            <td><span className="text-danger">Urgent</span></td>
                            <td><span className="text-muted">Closed</span></td>
                        </tr>
                        <tr>
                            <td><a className="text-medium navi-link" href="account-single-ticket.html">Ticket #4</a></td>
                            <td>05/05/2018</td>
                            <td>Account Problem</td>
                            <td><span className="text-success">Low</span></td>
                            <td><span className="text-muted">Closed</span></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <hr className="mb-4"/>
                <div className="text-right">
                    <button className="btn btn-primary margin-bottom-none" data-toggle="modal" data-target="#openTicket">New Ticket</button>
                </div>
            </div>


        );
    }
}

export default MyTicketsBody;