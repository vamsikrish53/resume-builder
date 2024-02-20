export class Education {
    private degreeName: string;
    private collegeName: string;
    private city: string;
    private cgpa: string;

    constructor(degreeName: string, collegeName: string, city: string, cgpa: string) {
        this.degreeName = degreeName;
        this.collegeName = collegeName;
        this.city = city;
        this.cgpa = cgpa;
    }

    public getDegreeName(): string {
        return this.degreeName;
    }

    public getCollegeName(): string {
        return this.collegeName;
    }

    public getCity(): string {
        return this.city;
    }

    public getCgpa(): string {
        return this.cgpa;
    }

}