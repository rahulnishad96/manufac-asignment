import '../App.css'
import { divideByClass, findMean, findMedian, findMode } from '../commons/Functions'

function TableView({ transformedData, property }) {
    const transformedDataToClass = divideByClass(transformedData);
    return (
        <div>
            <h2>Class-wise mean, median, mode of {property}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Measure</th>
                        {transformedDataToClass.map((item, index) => (
                            <th key={index}>Class {index + 1}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{property} Mean</td>
                        {transformedDataToClass.map((item, index) => (
                            <td key={index}>{findMean(property, item)}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>{property} Median</td>
                        {transformedDataToClass.map((item, index) => (
                            <td key={index}>{findMedian(property, item)}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>{property} Mode</td>
                        {transformedDataToClass.map((item, index) => (
                            <td key={index}>{findMode(property, item)}</td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TableView