import * as React from 'react'
import {PropsWithChildren} from "react";

export default class Content extends React.Component<PropsWithChildren> {

    render() {
        return(
            <div className={'content'}>
                {this.props.children}
            </div>
        )
    }
}
