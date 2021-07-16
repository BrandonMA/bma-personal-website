import { ReactElement } from 'react';
import Image from 'next/image';

interface Props {
    data: Array<string>;
    rowIndex: number;
    columnIndex: number;
    style: any;
}

export function CertificateRow({ style, data, rowIndex }: Props): ReactElement {
    console.log(data);
    return <Image alt={'Certificate'} style={style} width={198} height={256} src={`/${data[rowIndex]}`} />;
}
