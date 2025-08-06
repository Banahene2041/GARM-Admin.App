import * as yup from "yup";

export const loginSchema = yup.object().shape({
    email: yup
        .string()
        .trim()
        .email("Please enter a valid email address")
        .required("Email is required"),

    password: yup
        .string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .max(100, "Password is too long")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/\d/, "Password must contain at least one number")
        .matches(/[@$!%*?&]/, "Password must contain at least one special character"),
});

export const forgotPasswordSchema = yup.object().shape({
    email: yup
        .string()
        .trim()
        .email("Please enter a valid email address")
        .required("Email is required"),
});

export const resetpasswordSchema = yup.object().shape({
    password: yup
        .string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .max(100, "Password is too long")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/\d/, "Password must contain at least one number")
        .matches(/[@$!%*?&]/, "Password must contain at least one special character"),
    confirmPassword: yup
        .string()
        .required("Please confirm your password")
        .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export const profileValidationSchema = yup.object().shape({
    fullName: yup.string().trim(),
    email: yup.string().email("Please enter a valid email address").trim(),
    phoneNumber: yup.string().trim(),
    address: yup.string().trim(),
    birthDate: yup.date(),
    specialization: yup.string().trim(),
    workplace: yup.string().trim(),
    region: yup.string().trim(),
    rank: yup.string().trim(),
    yearsOfExperience: yup.number()
        .min(1, "Must be a positive number"),
    gender: yup.string().oneOf(['male', 'female'], 'Gender is required'),
    postalAddress: yup.string().trim(),
    qualifications: yup.array().of(
        yup.object().shape({
            title: yup.string(),
            institution: yup.string(),
            year: yup.date(),
            specialization: yup.string(),
            certificate: yup.mixed().nullable(),
        })
    ),
});

export const newCPDPointsSchema = yup.object().shape({
    title: yup
        .string()
        .required('Title of the activity is required')
        .max(100, 'Title cannot exceed 100 characters'),

    provider: yup
        .string()
        .required('Provider or organizer is required'),

    location: yup
        .string()
        .required('Location of the activity is required'),

    startDate: yup
        .date()
        .required('Start date is required')
        .typeError('Start date must be a valid date'),

    endDate: yup
        .date()
        .required('End date is required')
        .typeError('End date must be a valid date')
        .min(
            yup.ref('startDate'),
            'End date cannot be before start date'
        ),

    duration: yup
        .number()
        .required('Duration is required')
        .positive('Duration must be a positive number')
        .min(0.5, 'Duration must be at least 0.5 hours'),

    certificate: yup
        .mixed()
        .required('Certificate file is required')
        .test(
            'fileFormat',
            'Only PDF or image files are allowed',
            (value) => {
                if (!value) return false
                const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png']
                return allowedTypes.includes(value.type)
            }
        )
        .test(
            'fileSize',
            'File too large (max 5MB)',
            (value) => !value || (value && value.size <= 5 * 1024 * 1024)
        ),

    description: yup
        .string()
        .required('Description is required'),

    category: yup
        .string()
        .required('Category is required')
        .oneOf(['Workshop', 'Seminar', 'Conference', 'Online Course', 'Training', "Other"], 'Invalid category'),

    points: yup
        .number()
        .required('CPD points are required')
        .positive('Points must be a positive number')
        .min(0.5, 'Minimum point is 0.5'),
})

export const resourceSchema = yup.object().shape({
    title: yup
        .string()
        .trim()
        .required("Please title is required")
        .min(3, "Title must be more than 3 characters"),

    description: yup
        .string()
        .required('Description is required')
        .trim(),

    category: yup
        .string()
        .required('Category is required')
        .oneOf(['Research', 'Case', 'Article', 'Report', "Other"], 'Invalid category'),

    resourceFile: yup
        .mixed()
        .required('Resource file is required')
        .test(
            'fileFormat',
            'Only PDF or image files are allowed',
            (value) => {
                if (!value) return false
                const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png']
                return allowedTypes.includes(value.type)
            }
        )
})


export const newMemberSchema = yup.object().shape({
    fullName: yup.string().trim().required().min(3),
    email: yup
        .string()
        .trim()
        .email("Please enter a valid email address")
        .required("Email is required"),
    password: yup
        .string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .max(100, "Password is too long")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/\d/, "Password must contain at least one number")
        .matches(/[@$!%*?&]/, "Password must contain at least one special character"),
    contact: yup.string().trim(),
    birthDate: yup.date(),
    gender: yup.string().oneOf(['male', 'female'], 'Invalid Gender').required("Member gender is required"),
    role: yup
        .string()
        .oneOf(['intern', 'student', 'licensed'], 'Invalid member role')
        .required('Member role is required'),

    portfolio: yup
        .string()
        .oneOf(['member', 'executive'], 'Invalid member portfolio')
        .required('Member portfolio is required'),
});

export const financeSchema = yup.object().shape({
    title: yup.string()
        .required('Title is required')
        .max(100, 'Title cannot exceed 100 characters'),

    amount: yup.number()
        .typeError('Amount must be a number')
        .required('Amount is required')
        .positive('Amount must be a positive number'),

    type: yup.string()
        .oneOf(['Income', 'Expense'], 'Select a valid type')
        .required('Finance type is required'),

    category: yup
        .string()
        .oneOf(['Income', 'Expense'], 'Select a valid type')
        .required('Category is required'),

    description: yup.string()
        .max(500, 'Description is too long'),

    date: yup.date()
        .required('Transaction date is required')
        .max(new Date(), 'Date cannot be in the future'),

    dueDate: yup.date()
        .nullable()
        .when('type', {
            is: 'Expense',
            then: (schema) => schema.min(yup.ref('date'), 'Due date cannot be before transaction date'),
        }),

    referenceNumber: yup.string()
        .nullable()
        .max(50, 'Reference number too long'),

    paymentMethod: yup.string()
        .oneOf(['Bank Transfer', 'Mobile Money', 'Cash', 'Card'], 'Invalid payment method')
        .required('Payment method is required'),
});

