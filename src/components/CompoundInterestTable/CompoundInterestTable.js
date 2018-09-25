import React from 'react';



class CompoundInterestTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            compounds: []
        }
    }


    render() {

        const periodDictionary = {
            '1': 'Year',
            '4': 'Quarter',
            '2': 'Semi-Annual',
            '12': 'Month'
        }

        return (
            <div className='column'>
                <h2 className='title is-4'>Compound Interest time table</h2>
                <h6>Compounded {periodDictionary[this.props.period]}ly in {this.props.time} year(s)</h6>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>{periodDictionary[this.props.period]}</th>
                            <th>Loan at Start</th>
                            <th>Interest</th>
                            <th>Loan at End</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>888888888</td>
                            <td>Infinity</td>   
                            <td>Infinity</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>888888888</td>
                            <td>Infinity</td>   
                            <td>Infinity</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>888888888</td>
                            <td>Infinity</td>   
                            <td>Infinity</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>888888888</td>
                            <td>Infinity</td>   
                            <td>Infinity</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>888888888</td>
                            <td>Infinity</td>   
                            <td>Infinity</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>888888888</td>
                            <td>Infinity</td>   
                            <td>Infinity</td>
                        </tr>
                    </tbody>
                </table>
                <nav class="pagination" role="navigation" aria-label="pagination">
                    <a class="pagination-previous" title="This is the first page" disabled>Previous</a>
                    <a class="pagination-next">Next page</a>
                    <ul class="pagination-list">
                    <li>
                        <a class="pagination-link is-current" aria-label="Page 1" aria-current="page">1</a>
                    </li>
                    <li>
                        <a class="pagination-link" aria-label="Goto page 2">2</a>
                    </li>
                    <li>
                        <a class="pagination-link" aria-label="Goto page 3">3</a>
                    </li>
                    </ul>
                </nav>
            </div>
        );
    }


}


export default CompoundInterestTable;