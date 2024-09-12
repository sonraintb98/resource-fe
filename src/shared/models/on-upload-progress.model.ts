import { AxiosProgressEvent } from 'axios';

export type OnUploadProgressModel = (progress: AxiosProgressEvent) => void;
