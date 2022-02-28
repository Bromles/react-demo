import React from 'react';
import { TreeTable } from 'primereact/treetable';
import { toJS } from 'mobx';
import { CurrencyStore } from './CurrencyStore';
import { Column } from 'primereact/column';
import styles from './Currency.module.scss';
import { observer } from 'mobx-react-lite';

const Currency = observer(() => {
    return (
        <div className={ styles.card }>
            <TreeTable value={ toJS(CurrencyStore.getData()) }>
                <Column field="codealpha" header="Буквенный код валюты"/>
                <Column field="codenum" header="Цифровой код валюты"/>
                <Column field="descr" header="Описание"/>
                <Column field="countries" header="Страны"/>
                <Column field="remarks" header="Ремарки"/>
                <Column field="validfrom" header="Действительно с"/>
                <Column field="validto" header="Действительно до"/>
            </TreeTable>
        </div>
    );
});

export default Currency;
