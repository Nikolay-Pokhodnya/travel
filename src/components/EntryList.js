import React from 'react';
 
const EntryList = ({ entries, onDelete, onEdit }) => {
    return (
        <div className="table-responsive">
            <table className="table table-striped 
                                table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>Название</th>
                        <th>Описание</th>
                        <th>Дата</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        entries.map((entry, index) => (
                            <tr key={index}>
                                <td>{entry.title}</td>
                                <td>{entry.description}</td>
                                <td>{entry.date}</td>
                                <td>
                                    <button className="btn btn-sm 
                                                       btn-warning mr-2"
                                        onClick={
                                            () =>
                                                onEdit(index)
                                        }>
                                        Редактировать
                                    </button>
                                    <button className="btn btn-sm btn-danger"
                                        onClick={
                                            () =>
                                                onDelete(index)
                                        }>
                                        Удалить
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};
 
export default EntryList;