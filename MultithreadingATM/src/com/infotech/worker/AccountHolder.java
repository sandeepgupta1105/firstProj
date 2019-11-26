package com.infotech.worker;

import com.infotech.model.Account;

public class AccountHolder implements Runnable {

	private Account account;
	
	public AccountHolder(Account account) {
		this.account = account;
	}
	
	@Override
	public void run() {
		for(int i = 0; i <= 4; i++) {
			makeWithdraw(2000);
			if(account.getBalance() < 0) {
				System.out.println("Account is overdrawn!");
			}
		}
	}




	private void makeWithdraw(int withdrawalAmount) {
			if(account.getBalance() >= withdrawalAmount) {
				System.out.println(Thread.currentThread().getName() + " is going to withdraw $" + withdrawalAmount);
				try {
					Thread.sleep(3000);
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
				account.withDraw(withdrawalAmount);
				System.out.println(Thread.currentThread().getName() + " completes the withdrawal of $" + withdrawalAmount);
			} else {
				System.out.println("Not enough money in account for thread" + Thread.currentThread().getName() + " to withdra : " 
						+ account.getBalance());
			}
	}

}
