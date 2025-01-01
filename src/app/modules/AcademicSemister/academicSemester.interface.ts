export type TAcademicSemester = {
    semesterName: string;
    year: Date;
    code: string;
    duration: {
        start: Date;
        month: Date;
    }
    status: "UPCOMING" | "ONGOING" | "ENDED"
    lastAdmissionDate: Date;

}