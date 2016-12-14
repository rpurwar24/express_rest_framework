var connection = require('../connection');

function User(){
	this.get = function(id,res){
		connection.acquire(function(err,con){
			if(err){
				res.send(err);
			}
			else{
				var queryStr = undefined;
				if(id){
					queryStr = 'select * from user where id = ' + id;
				}
				else{
					queryStr = 'select * from user';
				}
				con.query(queryStr,function(err,result){
					con.release();
					if(err){
						res.send({error:1,message:err});
					}
					else if(!result){
						res.send({error:1, message:'No result for this query'});
					}
					else{
						console.log('inside get', result);
						res.send({error:0,message:'success',data:result});
					}
				});
			}
		});
	},
	this.create = function(usrObj,res){
		connection.acquire(function(err,con){
			con.query('insert into user set ?',usrObj, function(err,result){
				console.log("resullt => ",result);
				con.release();
				if(err){
					res.send({error:1, message:'User creation failed',err});
				}
				else if(!result.affectedRows){
					res.send({error:1,message:'no rows in database affected'});
				}
				else{
					res.send({error:0, message:'user creation succeed'});
				}
			});
		});
	};

	this.update = function(usrObj,res){
		connection.acquire(function(err,con){
			con.query('update user set ? where id = ?',[usrObj,usrObj.id], function(err,result){
				console.log("resullt => ",result);
				con.release();
				if(err){
					res.send({error:1, message:'user updation failed',err});
				}
				else if(!result.changedRows){
					res.send({error:1,message:'no rows in database affected'});
				}
				else{
					res.send({error:0, message:'user updation succeed'});
				}
			})
		})
	}

	this.delete = function(id,res){
		connection.acquire(function(err,con){
			con.query('delete from user where id = ?',id,function(err,result){
				con.release();
				console.log(result);
				if(err){
					res.send({error:1, message:'user deletion failed',err});
				}
				else if(!result.affectedRows){
					res.send({error:1,message:'no rows in database affected'});
				}
				else{
					res.send({error:0, message:'user deletion succeed'});
				}
			})
		})
	}
}

module.exports = new User();