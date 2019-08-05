import { Component } from '../core/Component';
import { Matrix4, Vector3 } from 'three';

@Component.Register
export class Transform extends Component {

    public matrix: Matrix4 = new Matrix4();

    public get position(): Vector3 {
        const position = new Vector3();
        this.matrix.decompose(position);
        return position;
    }

    public set position(position: Vector3) {
        this.matrix.setPosition(position);
    }

    public translate(translation: Vector3) {
        const translationMatrix = new Matrix4().makeTranslation(translation.x, translation.y, translation.z);
        this.matrix.multiply(translationMatrix);
    }

}
