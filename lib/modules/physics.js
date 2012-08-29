define(

	[
		"../../deps/box2d",
		"modules/Class"
	],

	function (box2d, Class) {

		"use strict";


		//Aliasing for Bizarro Box2d Conventions
		var
			Matrix2  = box2d.Common.Math.b2Mat22,
			Matrix3  = box2d.Common.Math.b2Mat33,
			Sweep    = box2d.Common.Math.b2Sweep,
			Tranform = box2d.Common.Math.b2Transform,
			Vector2  = box2d.Common.Math.b2Vec2,
			Vector3  = box2d.Common.Math.b2Vec3,

			//Objects for defining Objects in the world
			Body = box2d.Dynamics.b2BodyDef,

			//Object definitions for Collision detection
			Fixture = box2d.Dynamics.b2FixtureDef,

			//global world object where the simulation exists
			World = box2d.Dynamics.b2World,

			//Collision reaction and filtering objects
			CollisionReaction = box2d.Dynamics.b2ContactImpulse,
			CollisionFilter   = box2d.Dynamics.b2ContactFilter,
			Collision         = box2d.Dynamics.b2ContactListener,

			_debugDraw = box2d.Dynamics.b2DebugDraw;

			//TODO: figure out a convention for joints


		var Newton = Class.extend({

			bodyTypes: {
				massData: box2d.Collision.Shapes.b2MassData,
				polygon: box2d.Collision.Shapes.b2PolygonShape,
				circle: box2d.Collision.Shapes.b2CircleShape
			},

			bodies: {
				fixed: box2d.Dynamics.b2Body.b2_staticBody,
				kinematic: box2d.Dynamics.b2Body.b2_kinematicBody,
				dynamic: box2d.Dynamics.b2Body.b2_dynamicBody
			},

			createWorld: function (gravX, gravY, allowSleep) {
				return new World(new Vector2(gravX, gravY, allowSleep));
			},

			createBody: function(opts) {
				var
					bodyData;

				bodyData = new Body();
				bodyData.type = opts.type = this.bodies.fixed;

				if (opts.position) {
					bodyData.position = new Vector2(opts.position.y, opts.position.x);
				}

				bodyData.active = opts.active = true,

				//can this thing fall asleep?
				bodyData.allowSleep = opts.allowSleep = true,

				//starting angle of the body
				bodyData.angle = opts.angle = 0,

				bodyData.angularDamping = opts.angularDamping = 1,
				bodyData.angularVelocity = opts.angularVelocity = 0,

				//does this entity awake when it's created, or passive?
				bodyData.awake = opts.awake = false,

				//is this a fast moving entity? that should not
				//be able to go through other moving entities?
				bodyData.isProjectile = opts.isProjectile = false,

				//should this entity be forbidden from rotating? e.g; static entities (characters)
				bodyData.hasFixedRotation = opts.hasFixedRotation = false,
				bodyData.inertia = opts.intertia = 1,
				bodyData.linearDamping = opts.linearDamping = 1,

				//application specific object data
				bodyData.userData = opts.data = {};

				return bodyData;

			},


			addFixture: function(body, opts){
				var
					fix;

				fix = new Fixture();

				//kg/m^2
				fix.density = opts.density = 1,
				fix.friction = opts.friction = 1,

				//never does collision, but senses collision
				fix.isSensor = opts.isSensor = false,
				fix.restitution = opts.elasticity = 0.5,
				fix.shape = opts.shape = this.bodyTypes.circle,
				fix.data = opts.data = {};

				body.CreateFixture(fix);
				return body;
			}
		});

		return new Newton();
});