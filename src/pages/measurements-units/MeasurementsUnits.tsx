import React from 'react';
import { observer } from 'mobx-react-lite';
import { TreeTable } from 'primereact/treetable';
import { toJS } from 'mobx';
import { Column } from 'primereact/column';
import { MeasurementsUnitsStore } from './MeasurementsUnitsStore';
import styles from './MeasurementsUnits.module.scss';

const MeasurementsUnits = observer(() => {
    return (
        <div className={ styles.card }>
            <TreeTable value={ toJS(MeasurementsUnitsStore.getData()) }>
                <Column field="name" header="Наименование" expander/>
                <Column field="codenum" header="Код"/>
                <Column field="codenational" header="Национальное условное обозначение"/>
                <Column field="codeinternational" header="Международное условное обозначение"/>
                <Column field="symbolnational" header="Национальное символьное обозначение"/>
                <Column field="symbolinternational" header="Международное символьное обозначение"/>
            </TreeTable>
        </div>
    );
});

export default MeasurementsUnits;
