import { makeAutoObservable, runInAction } from 'mobx';
import TreeNode from 'primereact/treenode';

class CurrencyLocalStore {
    private data!: TreeNode[];

    constructor() {
        makeAutoObservable(this);

        this.updateData();
    }

    getData() {
        return this.data;
    }

    updateData() {
        fetch('currency.json').then(res => res.json()).then(d => {
            runInAction(() => this.data = d.root);
        });
    }
}

export const CurrencyStore = new CurrencyLocalStore();
