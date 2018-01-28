import { PipeTransform } from "@angular/core";
import { Pipe } from "@angular/core";
import { debug } from "util";

@Pipe({
    name:'shorten'
})
export class ShortenPipe implements PipeTransform{
    transform(value: any, limit:number) {
        if(value.length > limit){
            return value.substr(0,limit) + ' ...';
        }
        return value;
    }
    
}