
// Generic classes

class Generic<T>{

	value:T;
	setValue(value:T){

	}
	getValue() : T{ return this.value;}


}

var gen1= new Generic<string>();
gen1.setValue("hello world");
alert(gen1.getValue());

var gen2= new Generic<number>();
gen2.setValue(1);
alert(gen2.getValue());




/*to run the code in the browser we have to compile it, the changes will be reflected in js file 
, copy the code and run in the console */ 