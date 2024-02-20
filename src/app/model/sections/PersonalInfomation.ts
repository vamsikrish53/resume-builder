export class PersonalInformation {
    private name: string;
    private jobTitle: string;
    private email: string;
    private phoneNumber: string;
    private location: string;

    constructor(name: string, jobTitle: string, email: string, phoneNumber: string, location: string) {
        this.name = name;
        this.jobTitle = jobTitle;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.location = location;
    }

    public getName(): string {
        return this.name;
    }

    public getjobTitle(): string {
        return this.jobTitle;
    }

    public getEmail(): string {
        return this.email;
    }

    public getPhoneNumber(): string {
        return this.phoneNumber;
    }

    public getLocation(): string {
        return this.location;
    }

}