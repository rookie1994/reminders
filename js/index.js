var reminder=angular.module('reminder',[]);
reminder.controller('mainCtrl',['$scope',function($scope){
	var colors=['c1',"c2","c3","c4","c5","c6","c7"];
	var textColors=['c1-text','c2-text','c3-text','c4-text','c5-text','c6-text','c7-text'];
	$scope.items=[];
	$scope.currentItm=[];
	$scope.addItm=function(){
		var len=$scope.items.length;
		var id=(len==0)?1001:(Math.max.apply(null,$scope.items.map(function(v,i){
			return Number(v.id);
		}))+1);
		var newItm={
			id:id,
			name:'新列表'+(len+1),
			theme:colors[len%7],
			textColor:textColors[len%7],
			xq:[
				{
					name:'事项1',
					state:true
				},
				{
					name:'事项2',
					state:false
				},
				{
					name:'事项3',
					state:false
				},
				{
					name:'事项4',
					state:true
				},
			]
		}
		$scope.currentItm=newItm;
		$scope.items.push(newItm);
	}
	$scope.setCurrent=function(index){
		$scope.currentItm=$scope.items[index];
	}
}])