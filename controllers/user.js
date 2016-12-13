var connection = require('../connection');

function User(){
	this.get = function(res){
		connection.acquire(function(err,con){
			if(err){
				res.send(err);
			}
			else{
				con.query('select * from user',function(err,result){
					con.release();
					res.send(result);
				});
			}
		});
	},
	this.create = function(usrObj,res){
		connection.acquire(function(err,con){
			con.query('insert into user set ?',usrObj, function(err,result){
				con.release();
				if(err){
					res.send({status:1, message:'User creation failed'});
				}
				else{
					res.send({status:0, message:'user creation succeed'});
				}
			});
		});
	};

	this.update = function(usrObj,res){
		connection.acquire(function(err,con){
			con.query('update user set ? where id = ?',[usrObj,usrObj.id], function(err,result){
				con.release();
				if(err){
					res.send({status:1, message:'user updation failed'});
				}
				else{
					res.send({status:0, message:'user updation succeed'});
				}
			})
		})
	}

	this.delete = function(id,res){
		connection.acquire(function(err,con){
			con.query('delete from user where id = ?',id,function(err,result){
				con.release();
				if(err){
					res.send({status:1, message:'user deletion failed'});
				}
				else{
					res.send({status:0, message:'user deletion succeed'});
				}
			})
		})
	}
}

module.exports = new User();