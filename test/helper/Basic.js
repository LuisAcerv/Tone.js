define(["helper/Test", "Tone/core/Tone"], function(Test, Tone){

	// var testAudioContext = new Tone.Context();

	return function(Constr, args){

		context("Basic", function(){

			it("can be created and disposed", function(){
				var instance = new Constr(args);
				instance.dispose();
				Test.wasDisposed(instance);
			});

			it("extends Tone", function(){
				var instance = new Constr(args);
				expect(instance).to.be.an.instanceof(Tone);
				instance.dispose();
			});

			/*it("can specify the AudioContext", function(){
				var instance = new Constr(testAudioContext, args);
				expect(instance.context).to.equal(testAudioContext);
				instance.dispose();
			});*/

		});

	};
});
