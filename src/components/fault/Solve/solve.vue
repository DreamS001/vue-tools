<template>
	<div>
		<ul class="solve-list">
			<li class="solve-item">
				<div class="item-public item-title">
					<span class="mui-pull-left">安琪然-技术员</span>
          			<span class="mui-pull-right">正在维修</span>
				</div>
				<div class="item-public item-content">
					<div class="item-img"></div>
					<div class="item-word">
						2015年7月，伊朗与伊核问题六国（美国、英国、法国、俄罗斯、中国和德国）达成伊核协议。根据协议，伊朗承诺限制其核计划，国际社会将解除对伊制裁。国际原子能机构负责督查伊朗履行协议情况，迄今已多次出台报告确认伊朗履行了该协议。
            2015年7月，伊朗与伊核问题六国（美国、英国、法国、俄罗斯、中国和德国）达成伊核协议。根据协议，伊朗承诺限制其核计划，国际社会将解除对伊制裁。国际原子能机构负责督查伊朗履行协议情况，迄今已多次出台报告确认伊朗履行了该协议。
					</div>
				</div>
				<div class="item-public item-address">
					<span class="mui-pull-right">3#303室33台电脑&nbsp;&nbsp;<span>{{time | fmtdate('YYYY-MM-DD HH:mm:ss') }}</span></span>
				</div>
				<div class="item-public item-footer">
					<span class="mui-pull-right">确认</span>
				</div>
			</li>
			<li class="solve-item">
				<div class="item-public item-title">
					<span class="mui-pull-left">侯亮平-技术员</span>
          			<span class="mui-pull-right">正在维修</span>
				</div>
				<div class="item-public item-content">
					<div class="item-img"></div>
					<div class="item-word">
						2015年7月，伊朗与伊核问题六国（美国、英国、法国、俄罗斯、中国和德国）达成伊核协议。根据协议，伊朗承诺限制其核计划，国际社会将解除对伊制裁。国际原子能机构负责督查伊朗履行协议情况，迄今已多次出台报告确认伊朗履行了该协议。
            2015年7月，伊朗与伊核问题六国（美国、英国、法国、俄罗斯、中国和德国）达成伊核协议。根据协议，伊朗承诺限制其核计划，国际社会将解除对伊制裁。国际原子能机构负责督查伊朗履行协议情况，迄今已多次出台报告确认伊朗履行了该协议。
					</div>
				</div>
				<div class="item-public item-address">
					<span class="mui-pull-right">3#303室33台电脑&nbsp;&nbsp;<span>{{time | fmtdate('YYYY-MM-DD HH:mm:ss') }}</span></span>
				</div>
				<div class="item-public item-footer">
					<span class="mui-pull-right">确认</span>
				</div>
			</li>
		</ul>
		<div v-show="isShow" class="no-order"></div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				isShow:false,
        time:1528281965000
			}
		}
	};
</script>

<style scoped>
	.solve-list{
		width: 100%;
		padding: 0;
		margin: 0;
	}
	.solve-list .solve-item{
		/*height: 181px;*/
		background: #FFF;
		display: flex;
		flex-direction: column;
		margin-bottom: 2%;
	}
	.solve-list .solve-item:last-child{
		margin-bottom: 0;
	}
	.solve-list .solve-item .item-public {
		padding: 0 5%;
		box-sizing: border-box;
	}
	.solve-list .solve-item .item-title{
		height: 66px;
		line-height: 66px;
	}
	.solve-list .solve-item .item-title span{
		font-size: 24px;/*px*/
		color: #000000;
	}
	.solve-list .solve-item .item-title span:last-child{
		font-size: 20px;/*px*/
		color: #488AB3;
	}
	.solve-list .solve-item .item-content{
		height: 180px;
		background: #efeff4;
		display: flex;
		align-items: center;
	}
	.solve-list .solve-item .item-content .item-img{
		width: 140px;
		height: 140px;
		border-radius: 5px;
		background: #2C86BA;
	}
	.solve-list .solve-item .item-content .item-word{
		width: 77%;
		height: 112px;
		margin-left: 2%;
		font-size: 16px;/*px*/
		overflow: hidden;
		text-overflow: ellipsis;
		/*设置成弹性盒子 */
		display: -webkit-box;
		/*显示的个数 */
		-webkit-line-clamp: 5;
		/* 属性规定框的子元素应该被水平或垂直排列。 */
		-webkit-box-orient: vertical;
		padding: 10px 0;
    box-sizing: border-box;
	}
	.solve-list .solve-item .item-address{
		height: 70px;
		line-height: 70px;
		border-bottom: 1px solid #D4D4D4;/*no*/
	}
	.solve-list .solve-item .item-address span{
		font-size: 20px;/*px*/
		color: #3F3F3F;
	}
	.solve-list .solve-item .item-footer{
		height: 78px;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
	.solve-list .solve-item .item-footer span{
		display: block;
		height: 45px;
		width: 172px;
		text-align: center;
		line-height: 45px;
		font-size: 20px;/*px*/
		color: #0A6B9B;
		border: 1px solid #0A6B9B;
		border-radius: 24px;
	}
	/*暂无订单*/
	.no-order{
		width: 100%;
		height: 310px;
		margin-top: 36px;
		background: url(../../../../static/images/order.png) no-repeat;
		background-size: 218px 303px;
		background-position: center;
	}
</style>
