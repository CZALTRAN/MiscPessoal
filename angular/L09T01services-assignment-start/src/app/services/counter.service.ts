export class CounterService{
    counter:number = 0;
  
    incrementCounter()
    {
        this.counter++;
        console.log('Contador de ações: '+this.counter);
    }
}