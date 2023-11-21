import { LightningElement } from 'lwc';
export default class Parent extends LightningElement {
    message = 'Updated count will appear here';
    updateMessage(event){
        this.message = event.detail.message;
    }
}