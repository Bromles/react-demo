import TreeNode from 'primereact/treenode';
import { makeAutoObservable, runInAction } from 'mobx';

class MeasurementsUnitsLocalStore {
    private data!: TreeNode[];

    constructor() {
        makeAutoObservable(this);

        this.updateData();
    }

    getData() {
        return this.data;
    }

    updateData() {
        fetch('mu.json').then(res => res.json()).then(d => {
            runInAction(() => this.data = d.root);
        });
    }
}

export const MeasurementsUnitsStore = new MeasurementsUnitsLocalStore();
