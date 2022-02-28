import { makeAutoObservable } from 'mobx';

export class GlobalStore {
    private showSidebar: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    isShowSidebar = () => {
        return this.showSidebar;
    };

    toggleSidebar = () => {
        this.showSidebar = !this.showSidebar;
    };
}
