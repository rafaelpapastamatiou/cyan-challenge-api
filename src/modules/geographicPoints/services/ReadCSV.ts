import { parse } from 'papaparse';

import { StringStream } from 'scramjet';

import request from 'request';

interface IRequest {
  url: string;
}

type CSVParsed = { latitude: number; longitude: number }[];

export default class ReadCSV {
  public async execute({ url }: IRequest): Promise<CSVParsed> {
    const stream = request.get(url).pipe(new StringStream());

    return new Promise((resolve, reject) => {
      return parse(stream, {
        header: true,
        delimiter: ',',
        complete: result => {
          resolve(result.data as CSVParsed);
        },
        error: err => {
          reject(err);
        },
      });
    });
  }
}
