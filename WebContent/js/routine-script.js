/**
 * 
 */

var routineAapp = angular.module('routine', ['ui.bootstrap', 'ngAnimate', 'ngSanitize', 'mgcrea.ngStrap']);

routineAapp.controller('rtnCtrl', ['$scope', '$filter', function($scope, $filter) {
	
	$scope.routineTable;
	
	$scope.tuple = {
			id : '',
			name : '',
			creditHr : 'Credit Hours',
			day : 'Day',
			startTime : '',
			endTime : '',
			place : '',
			startDate : '',
	};	
	$scope.credithrs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	$scope.weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
	$scope.rtnList = [];

	var stTime,
		etTime,
		sDate;	
	
	$scope.selectCrHr = function(chr){
		$scope.tuple.creditHr = chr;
	}	
	$scope.selectday = function(day){		
		$scope.tuple.day = day;
	}
	$scope.stChanged = function(){		
		stTime = new Date($scope.tuple.startTime).toLocaleTimeString();
	}
	$scope.etChanged = function(){
		etTime = new Date($scope.tuple.endTime).toLocaleTimeString();
	}
	$scope.sdChanged = function(){
		sDate = new Date($scope.tuple.startDate).toDateString();
	}
	
	$scope.addRoutine = function(){
		
		$scope.rtnList.push({
				id: 'MA-INF '+$scope.tuple.id,
				name: $scope.tuple.name,
				creditHr : $scope.tuple.creditHr==='Credit Hours'? 'N/A' : $scope.tuple.creditHr,
				day : $scope.tuple.day==='Day'?'N/A':$scope.tuple.day,
				startTime: stTime,
				endTime: etTime,
				place : $scope.tuple.place,
				startDate : sDate,
		});		
		
		$scope.tuple = {
				id : '',
				name : '',
				creditHr : 'Credit Hours',
				day : 'Day',
				startTime : '',
				endTime : '',
				place : '',
				startDate : '',
		};		
	};
	
	$scope.fields = {
			
	};
	
}]);